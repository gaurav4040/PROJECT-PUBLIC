'use client'

import { SplineScene } from "./splite-hero.tsx";
import { Card } from "./card-hero.tsx"
import { Spotlight } from "./spotlight-hero.tsx"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-[100vw] h-[100vh] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />

      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl py-5 md:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Lightning
          </h1>
          <h4 className="text-2xl ml-5  md:text-2xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Chat at the speed of light</h4>
          <p className="mt-4 text-neutral-300 max-w-lg">
          stay connected like never before with Lightning, the speed, security, and ease of real-time chat designed specifically for speed, security, and effortless communication. Chat one-on-one or in groups and enjoy instant messaging with no lag. With a streamlined interface and robust features, Lightning keeps your conversations running smoothly. Join the future of communication—fast, dependable, and designed for you!
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}