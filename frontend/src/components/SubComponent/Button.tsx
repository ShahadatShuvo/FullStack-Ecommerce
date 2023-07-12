function Button({ btnTitle }: { btnTitle: string }) {
  return (
    <div>
      <button className="css-button-sliding-to-left--blue">{btnTitle}</button>
    </div>
  );
}

export default Button;
