import React, { useState, useMemo } from "react";
import Link from "next/link";
import { LinkIt, LinkItUrl } from "react-linkify-it";
import Linkify from "../Linkify";

interface ExpandableTextProps {
  text: string;
  limit: number;
}

export default function ExpandableText({ text, limit }: ExpandableTextProps) {
  const { 0: isExpanded, 1: setIsExpanded } = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = useMemo(() => {
    return isExpanded || text.length <= limit
      ? text
      : text.slice(0, limit) + "...";
  }, [text, limit, isExpanded]);

  return (
    <div>
      <div className="whitespace-pre-line break-words">
        <Linkify> {displayText}</Linkify>
      </div>
      {text.length > limit && (
        <button
          onClick={handleToggle}
          className="text-purple-400 hover:underline"
        >
          {isExpanded ? "Показать меньше" : "Показать больше"}
        </button>
      )}
    </div>
  );
}
