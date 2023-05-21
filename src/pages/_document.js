import Document, { Html, Main, NextScript, Head } from "next/document";

class GlobalDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    return (
      <Html
        dir={this.props.locale === "ar" ? "rtl" : "ltr"}
        lang={this.props.locale}
        className="h-full antialiased"
      >
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        </Head>
        <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default GlobalDocument;