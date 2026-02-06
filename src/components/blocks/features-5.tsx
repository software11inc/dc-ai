import { Plug, Workflow, Users, BarChart3 } from 'lucide-react'

export function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">The capture platform</h2>
                            <p className="mt-6">A plugin that runs inside PowerPoint and Google Slides. Your designers work normally — every shape operation, every narration, every visual state flows directly into your training pipeline.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Plug className="size-5" />
                                Drop-in plugin for PPT + Slides
                            </li>
                            <li>
                                <Workflow className="size-5" />
                                Direct pipeline to training infra
                            </li>
                            <li>
                                <Users className="size-5" />
                                Scales with your design team
                            </li>
                            <li>
                                <BarChart3 className="size-5" />
                                Dataset compounds daily
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <img src="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=75" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <img src="https://tailark.com/_next/image?url=%2Fpayments-light.png&w=3840&q=75" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
