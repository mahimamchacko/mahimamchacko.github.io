type BadgeProps = {
  color: string
  children: React.ReactNode
}

export default function Badge({ color = "bg-sky-200", children }: BadgeProps) : React.ReactNode {
  return (
    <div className="flex">
      <div className={`py-px px-2.5 rounded-full ${color} `}>
        {children}
      </div>  
    </div>
  );
}