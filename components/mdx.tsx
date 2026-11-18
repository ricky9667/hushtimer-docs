import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import type { MDXComponents } from 'mdx/types';
import type { ImgHTMLAttributes } from 'react';

const DefaultImage = defaultMdxComponents.img;

// Next's <Image> needs a width. Remote images that couldn't be measured at build time
// (for example a dead link) have none, so render them as a plain <img> instead of crashing the page.
function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  // Local images arrive as a static import object that carries its own size.
  if (typeof props.src === 'string' && props.width === undefined) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ''} className="rounded-lg" />;
  }
  return <DefaultImage {...props} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: Image,
    Accordion,
    Accordions,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
