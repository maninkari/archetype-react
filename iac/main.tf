provider "aws" {
  region = "${var.region}"
}

resource "aws_s3_bucket" "react_bucket" {
  bucket = "${var.bucket_name}"
  acl    = "public-read"

  policy = <<EOF
{
  "Id": "bucket_policy_site",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_site_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.bucket_name}/*",
      "Principal": "*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    Name = "ReactApp"
    Environment = "${var.environment}"
    Project = "${var.project}"
  }
}


terraform {
  backend "s3" {
    bucket = "bckend-terraform"
    key = "terraform/status"
    region = "eu-west-2"
  }
}
