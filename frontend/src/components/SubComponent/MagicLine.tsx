function MagicLine({ title }: { title: string }) {
  return (
    <div>
      <div className="flex justify-start">
        <div className="border-4 border-gradient w-1/3"></div>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        {title}
      </h1>

      <div className="flex justify-end">
        <div className="border-4 border-gradient w-1/3"></div>
      </div>
    </div>
  );
}

export default MagicLine;
