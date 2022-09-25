import { FC, ReactNode } from "react"

import Head from "next/head"

interface Props {
    children: ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const TyerraLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head>
            <main>{children}</main>
        </>
    )
}
