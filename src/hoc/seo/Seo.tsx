import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface ISeo {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Seo: FC<ISeo> = ({ title, description, image = "/image.jpg", url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={`https://${url}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url} />
      <meta property="twitter:url" content={`https://${url}/`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {import.meta.env.MODE === "production" && (
        <>
          {/* <script type="text/javascript">{mailCounter}</script>
          <noscript>{mailNoScript}</noscript>
          <script type="text/javascript">{mailRating}</script>

          <script type="text/javascript">{yaCounter}</script>
          <noscript>{yaNoScript}</noscript>

          <script
            src="//cdn.callibri.ru/callibri.js"
            type="text/javascript"
          ></script> */}
        </>
      )}
    </Helmet>
  );
};
export default Seo;
