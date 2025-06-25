  <motion.div
            className="flex-1 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome badge */}
            {/* <motion.div
              className="mb-4 inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold tracking-wide">
                WELCOME TO MY PORTFOLIO
              </span>
            </motion.div> */}

            {/* Name with gradient */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-sky-100 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="block text-blue-600 dark:text-blue-400">
                HEY, I'M
              </span>
              <span>
                <TypewriterTextCycle />
              </span>
            </motion.h1>

            {/* Animated tagline */}
            {/* <motion.div
              className="mb-6 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 border-r-4 border-blue-500 pr-2">
                Creative Developer & Problem Solver
              </h2>
            </motion.div> */}

            {/* Description */}
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
                {aboutMe}
            </motion.p>

            {/* Skills Badges */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`${skill.color} px-4 py-2 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  {skill.name}
                </span>
              ))}
            </motion.div>

            {/* <AnimatedSkills/> */}



            <ProjectButton />

            {/* Social Links */}
            <motion.div
              className="mt-10 flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              <a
                href="https://www.linkedin.com/in/ye-htet-aung-23abb4280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
              {/* <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a> */}
              <a
                href="https://github.com/Yehtetaung158/"
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"
              >
                <FaGithub />
                
              </a>
            </motion.div>
          </motion.div>