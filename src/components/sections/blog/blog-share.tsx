"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Share2,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui";

type BlogShareProps = {
  title: string;
  url: string;
};

export function BlogShare({
  title,
  url,
}: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const nativeShare = async () => {
    if (!navigator.share) {
      return;
    }

    try {
      await navigator.share({
        title,
        url,
      });
    } catch {
      // User cancelled sharing.
    }
  };

  return (
    <div className="border-y border-border py-6 sm:py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold sm:text-lg">
            Share Article
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Share this article with your network.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Button
            size="icon"
            variant="outline"
            onClick={nativeShare}
            aria-label="Share article"
          >
            <Share2 className="size-4 shrink-0" />
          </Button>

          <Button
            asChild
            size="icon"
            variant="outline"
          >
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                url
              )}&text=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
            >
              <FaSquareXTwitter className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            size="icon"
            variant="outline"
          >
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            size="icon"
            variant="outline"
          >
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="size-4" />
            </a>
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={copyLink}
            aria-label={
              copied ? "Link copied" : "Copy link"
            }
          >
            {copied ? (
              <Check className="size-4 shrink-0" />
            ) : (
              <Copy className="size-4 shrink-0" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}