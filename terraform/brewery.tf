provider "aws" {
  access_key = var.access_key
  secret_key = var.secret_key
  region     = var.region
}

terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "trueparallels"

    workspaces {
      name = "brewery-app-prod"
    }
  }
}

resource "aws_s3_bucket" "brewery-app-kyle" {
  bucket = "brewery-app-kyle"
  acl = "public-read"

  website {
    index_document = "index.html"
  }
}
