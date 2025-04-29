import { Spinner } from "@/components/ui/spinner"

// const variants = ['default', 'circle', 'pinwheel', 'circle-filled', 'ellipsis', 'ring', 'bars', 'infinite'];


const Loader = () => (
//   <div className="grid grid-cols-4 gap-16">
//     {variants.map((variant) => (
//       <div key={variant} className="flex flex-col items-center justify-center gap-4">
//         <Spinner key={variant} variant={variant} />
//         <span className="text-xs text-muted-foreground font-mono">{variant}</span>
//       </div>
//     ))}
//   </div>
    <div className="flex justify-center">
        <Spinner variant='ring' />
    </div>
);
  
export default  Loader ;