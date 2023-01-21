import parse from 'html-react-parser';
import React from 'react';
import sanitizeHtml from 'sanitize-html';

export type RichTextType = { html: string };

export const RichText = ({ html }: RichTextType) => <>{parse(sanitizeHtml(html))}</>;
