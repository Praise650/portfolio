'use client'

import { DATA } from "@/resume-data/data"

// function Experience() {
//   return (
//     <>
//     <div className="min-h-[calc(100vh-6rem)]  text-white">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center md:text-start">
//           <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-10 inline-flex items-center">
//             Experience
//             <div className="relative">
//               <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full" />
//             </div>
//           </h2>
//         </div>

//         <div className="space-y-8 pb-20">
//           {DATA.experiences.map((experience, index) => (
//             <div key={`${experience.company}-${index}`} className="space-y-4 border p-4 rounded-2xl">
//                 <div className="flex justify-between items-start">
//                     <h3 className="text-sm md:text-2xl font-semibold">{experience.company}</h3>
//                     <div className="text-right">
//                       <div className="text-sm md:text-xl">
//                         {experience.startDate} - {experience.endDate}
//                       </div>
//                     </div>
//                 </div>

//                 <div className="flex justify-between">
//                     <h4 className="md:text-xl font-medium text-emerald-400">
//                         {experience.role}
//                     </h4>
//                     <div className="md:text-xl mt-1">{experience.location}</div>
//                 </div>

//                 <div className="flex flex-wrap gap-2 mt-6">
//                     {experience.technologies.map((tech) => (
//                     <span
//                         key={tech}
//                         className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium"
//                     >
//                         {tech}
//                     </span>
//                     ))}
//                 </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// without nested experiences
// function Experience() {
//   return (
//     <>
//       <div className="min-h-[calc(100vh-6rem)] text-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center md:text-start">
//             <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-10 inline-flex items-center">
//               Experience
//               <div className="relative">
//                 <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full" />
//               </div>
//             </h2>
//           </div>
//           <div className="space-y-8 pb-20">
//             {DATA.experiences.map((experience, index) => (
//               <div key={`${experience.company}-${index}`} className="space-y-4 border p-4 rounded-2xl">
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-sm md:text-2xl font-semibold">{experience.company}</h3>
//                   <div className="text-right">
//                     <div className="text-sm md:text-xl">
//                       {experience.startDate} - {experience.endDate}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between">
//                   <h4 className="md:text-xl font-medium text-emerald-400">
//                     {experience.role}
//                   </h4>
//                   <div className="md:text-xl mt-1">{experience.location}</div>
//                 </div>
                
//                 {/* Description section */}
//                 {experience.description && (
//                   <div className="mt-4">
//                     <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                       {experience.description}
//                     </p>
//                   </div>
//                 )}
                
//                 {/* Key achievements/responsibilities list */}
//                 {experience.achievements && experience.achievements.length > 0 && (
//                   <div className="mt-4">
//                     <ul className="space-y-2">
//                       {experience.achievements.map((achievement, achievementIndex) => (
//                         <li key={achievementIndex} className="flex items-start">
//                           <span className="text-emerald-400 mr-3 mt-1 text-xs">•</span>
//                           <span className="text-gray-300 text-sm md:text-base leading-relaxed">
//                             {achievement}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
                
//                 <div className="flex flex-wrap gap-2 mt-6">
//                   {experience.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// with nested achievements 
function Experience() {
  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-start">
            <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-10 inline-flex items-center">
              Experience
              <div className="relative">
                <span className="absolute top-2 size-1 md:size-3 bg-emerald-400 rounded-full" />
              </div>
            </h2>
          </div>
          <div className="space-y-8 pb-20">
            {DATA.experiences.map((experience, index) => (
              <div key={`${experience.company}-${index}`} className="space-y-4 border p-4 rounded-2xl">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm md:text-2xl font-semibold">{experience.company}</h3>
                  <div className="text-right">
                    <div className="text-sm md:text-xl">
                      {experience.startDate} - {experience.endDate}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h4 className="md:text-xl font-medium text-emerald-400">
                    {experience.role}
                  </h4>
                  <div className="md:text-xl mt-1">{experience.location}</div>
                </div>
                
                {/* Description section */}
                {experience.description && (
                  <div className="mt-4">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                )}
                
                {/* Key achievements/responsibilities list */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mt-4">
                    <div className="space-y-4">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex}>
                          {/* Check if it's a project with nested items */}
                          {typeof achievement === 'object' && achievement.project && achievement.items ? (
                            <div className="space-y-3">
                              {/* Project title */}
                              <div className="flex items-start">
                                <span className="text-emerald-400 mr-3 mt-1 text-xs font-bold">•</span>
                                <h5 className="text-white font-semibold text-sm md:text-base">
                                  {achievement.project}
                                </h5>
                              </div>
                              {/* Project items */}
                              <ul className="ml-6 space-y-2">
                                {achievement.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1 text-xs">◦</span>
                                    <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            /* Simple achievement item */
                            <div className="flex items-start">
                              <span className="text-emerald-400 mr-3 mt-1 text-xs">•</span>
                              <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                                {typeof achievement === 'string' ? achievement : ''}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience

