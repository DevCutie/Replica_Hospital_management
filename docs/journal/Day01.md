Medicare Project Reflection


What I Built
The core of this project is a Single Page Application (SPA) built entirely with Vanilla JavaScript. Unlike a traditional website where every click triggers a full page refresh, I engineered a custom Hash Router in the main.js file. This router listens for changes in the URL (like #home or #login) and dynamically injects the corresponding JavaScript module into a single index.html file.

I developed a modular folder structure to keep the code professional. The Home Page is the centerpiece, featuring an elegant Hero section with high-quality medical imagery, a statistics bar highlighting hospital achievements (like "25+ Years Experience"), and a comprehensive services grid using Font Awesome iconography. I also built a dedicated Expert Physicians section with professional headshots and descriptions, followed by a Testimonials area. To round out the functionality, I implemented a responsive Login Page with "glassmorphism" styling and a "Back to Home" navigation system, ensuring the portal is ready for future backend integration.

What Broke
The development process was not without its "heart attack" moments. The biggest hurdle was the Blank Screen Error that occurred when I first transitioned to a modular structure. This happened because I tried to import functions in main.js that hadn't been properly exported yet in my dashboard.js and login.js files. In a modular environment, if even one import fails, the entire application crashes.

I also faced significant issues with Image and Icon Rendering. Initially, local paths like doctor.jpg were failing to load because of the folder structure, and the doctor headshots were appearing with "cut-off heads." This required a CSS fix using object-fit: cover and object-position: top center to ensure the physicians looked professional. Finally, I hit a Git Merge Conflict while pushing the code. My local README.md and the version on GitHub had different histories, leading to a "non-fast-forward" error that required manual resolution of the "Incoming Changes" within VS Code.

What Was Hard to Understand
The most challenging concept to grasp was the State and Logic of the SPA Router. It was difficult to wrap my head around the idea that index.html stays empty and that JavaScript is "injecting" massive strings of HTML into a single div. Understanding how to pass the app container as an argument to different page functions felt abstract at first.

Additionally, the GitHub Authentication and Version Control workflow was a steep learning curve. Managing a Personal Access Token (PAT) instead of a standard password, and understanding the difference between a git push --force and a git pull --allow-unrelated-histories, felt like learning a second language. Resolving merge conflicts—deciding between the "Current" (green) and "Incoming" (blue) changes—was intimidating, as I was worried about accidentally deleting my hard-earned code. However, successfully pushing the final "feat" commit using Conventional Commit standards was the most rewarding part of the process.