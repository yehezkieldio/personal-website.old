import Layout from "#/lib/components/layout";

export default function Template({ children }: { children: React.ReactNode }) {
    return <Layout withNavigation={false}>{children}</Layout>;
}
