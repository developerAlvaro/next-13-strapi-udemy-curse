
interface Props {
    header: string;
}

const PageHeader = ({header}:Props) => {
    return(
        <h1 className="text-heading flex items-center text-5xl font-bold tracking-tight">{header} <span className="inline-flex ms-3 px-2 py-1 ring-1 ring-inset ring-brand-subtle text-fg-brand-strong text-sm font-medium rounded bg-brand-softer">PRO</span></h1>
    )
}

export default PageHeader;