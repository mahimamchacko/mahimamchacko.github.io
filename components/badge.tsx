type BadgeProps = {
  color: string;
  children: React.ReactNode;
};

function Badge({
  color = "bg-sky-200",
  children,
}: BadgeProps): React.ReactNode {
  return (
    <div className="flex items-start">
      <div className={`py-px px-2.5 rounded-full ${color} `}>{children}</div>
    </div>
  );
}

export default Badge;
