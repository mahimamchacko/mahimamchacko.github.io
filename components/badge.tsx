type BadgeProps = {
  color: string
  children: React.ReactNode
}

export default function Badge({ color = "bg-sky-200", children }: BadgeProps) : React.ReactNode {
  return (
    <div className={`py-0.5 px-3 rounded-full ${color} `}>
        {children}
    </div>
  );
}