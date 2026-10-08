type IconProps = {
  id: string;
  className?: string;
};

export function Icon({ id, className = "ic" }: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}
