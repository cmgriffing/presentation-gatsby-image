# gatsby-image

## Installing

Default `gatsby new` from the cli does this all by default. It even has an example preloaded image using the "blur up" technique.

```shell
yarn add  gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp
```

<div class="notes">
We will cover what the "blur up" is later.

Depending on what starter template you used.

NPM works fine too.
</div>

## Config

Once again the default `gatsby new` has this covered.

```javascript
const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
```

## Usage

```jsx
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fixed={data.image.childImageSharp.fixed} />
  </div>
)


export const query = graphql`
  query {
    image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
```

## Usage: PageQuery

```js
query {
  image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
    childImageSharp {
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
}
```



## Caveats

Two types of responsive images supported

- Images that have a fixed width and height
- Images that stretch across a fluid container

<div class="notes">

gatsby-image is not a drop-in replacement for `<img />`

Some ways you can use `<img />` won’t work with gatsby-image

</div>

## External Providers

Besides local, (using Sharp.js), you can use external asset providers:

- Contentful - [https://www.contentful.com/](https://www.contentful.com/) - [https://www.gatsbyjs.org/packages/gatsby-source-contentful/](https://www.gatsbyjs.org/packages/gatsby-source-contentful/)
- DatoCMS - [https://www.datocms.com/](https://www.datocms.com/) - [https://www.gatsbyjs.org/packages/gatsby-source-datocms/](https://www.gatsbyjs.org/packages/gatsby-source-datocms/)
- Sanity - [https://www.sanity.io/](https://www.sanity.io/) - [https://www.gatsbyjs.org/packages/gatsby-source-sanity](https://www.gatsbyjs.org/packages/gatsby-source-sanity)

## Polyfilling object-fit/object-position for IE

> If you’d like to include a polyfill for the object-fit/object-position CSS properties (which aren’t supported by default in Internet Explorer), import from `gatsby-image/withIEPolyfill` instead.

## Art Directed Images

```jsx
export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <div>
      <h1>Hello art-directed gatsby-image</h1>
      <Img fluid={sources} />
    </div>
  )
}
```

<div class="notes">
Imagine:

- On Desktop, a large landscape shot with a person in the middle.

- On mobile, that same image is shrunk down, making the person very small

Instead:

- show a smaller, portrait image on mobile, which zooms in on the person.

</div>

## A Few More Caveats

[https://www.gatsbyjs.org/packages/gatsby-image/#some-other-stuff-to-be-aware-of](https://www.gatsbyjs.org/packages/gatsby-image/#some-other-stuff-to-be-aware-of)

## Using `display: none;`

> If you want to set `display: none;` on a component using a `fixed` prop, you need to also pass in to the style prop `{ display: 'inherit' }`.

## SEO Concerns When Making Changes

> Be aware that from a SEO perspective it is advisable not to change the image parameters lightheartedly once the website has been published. ... As a result, the image could appear on the image SERP as [a] “new” one.

## Loading

> By default, images don’t load until JavaScript is loaded.

> Images marked as `critical` will start loading immediately as the DOM is parsed, but unless `fadeIn` is set to `false`, the transition from placeholder to final image will not occur until after the component is mounted.

## No GIFs

> Gifs can’t be resized the same way as pngs and jpegs, **unfortunately** — if you try to use a gif with gatsby-image, it won’t work. For now, the best workaround is to import the gif directly.

## Lazy-loading

> Lazy loading behavior is dependent on `IntersectionObserver` which is not available in IE. A polyfill is recommended.

##

![](./assets/transformer-down.gif)
