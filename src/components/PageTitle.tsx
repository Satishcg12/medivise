function PageTitle({ title, children }: { title: string, children?: React.ReactNode }) {
  return (
    <div
      className={`flex items-center gap-4 justify-between flex-wrap`}
    >
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}

export default PageTitle;
