# Rakesh Magapu — Premium AI/ML Developer Portfolio

A production-quality personal developer portfolio website for **Rakesh Magapu**, 3rd-Year B.Tech CSE & AIML student at Bonam Venkata Chalamayya Engineering College, aspiring to become an AI/ML Developer.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Vite 8**, and **Lucide Icons**.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Customize & Add Content

All portfolio content is separated from the UI logic and managed in a single file:  
👉 **`src/data/portfolioData.ts`**

### 1. Updating Your Profile Photograph
- Place your personal photo in the `public/` directory named:
  ```
  public/profile.jpg
  ```
- The website will immediately display your photo in the Hero frame with the subtle glass frame, soft border, and futuristic glow.

### 2. Updating Your Resume
- Replace the file located at:
  ```
  public/resume.pdf
  ```
- The **Resume** buttons in the navigation bar, hero section, and modal dialog will automatically download or open this updated file.

### 3. Adding New Projects
Open `src/data/portfolioData.ts` and add an object to the `projects` array:
```typescript
export const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Project Title",
    subtitle: "Short Subtitle",
    shortDescription: "A concise 1-2 sentence description of what the project does.",
    detailedDescription: "More in-depth explanation of the architecture, models, or algorithms used.",
    technologies: ["Python", "PyTorch", "React", "FastAPI"],
    githubUrl: "https://github.com/rakeshmagapu2509/your-repo",
    liveDemoUrl: "https://your-demo-link.com",
    category: "AI / Machine Learning",
    featured: true,
    date: "2026",
    status: "Completed",
    keyHighlights: [
      "Trained model with 92% accuracy on custom dataset",
      "Built REST API with sub-100ms inference latency"
    ]
  }
];
```
*Note: When the array is empty (`[]`), the website gracefully shows an authentic "In Development" state with a blueprint system preview.*

### 4. Adding Hackathons & Events
In `src/data/portfolioData.ts`, edit `hackathonsList`:
```typescript
{
  id: "event-slug",
  name: "Event Name",
  organization: "Organizing Body",
  role: "Participant / Developer",
  description: "Brief summary of what you built and learned.",
  status: "Completed",
  technologies: ["Python", "Algorithms", "Teamwork"]
}
```

### 5. Adding Achievements & Certifications
In `src/data/portfolioData.ts`, add to `achievementsList`:
```typescript
export const achievementsList: Achievement[] = [
  {
    id: "cert-1",
    title: "Certification Title",
    organization: "Issuing Organization",
    date: "Month Year",
    category: "Machine Learning",
    description: "Summary of topics mastered.",
    credentialUrl: "https://verification-url.com"
  }
];
```

### 6. Adding More Skills
Edit the `skillCategories` array in `src/data/portfolioData.ts`. Add new skills with custom tags, icons, and descriptions without assigning fake percentages!

---

## 🌐 Deploying Online

### Deploy to Vercel
1. Push this repository to your GitHub account (`https://github.com/rakeshmagapu2509`).
2. Go to [Vercel](https://vercel.com) and click **Import Project**.
3. Select your repository. Framework preset: **Vite**.
4. Click **Deploy**.

### Deploy to Netlify
1. Go to [Netlify](https://netlify.com) and connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 🎨 Design Philosophy
- **Apple × AI × Modern Developer Aesthetic**: Clean typography, high-contrast dark obsidian canvas, frosted glass surfaces, and subtle cyan/indigo technical accents.
- **Authentic & Student-Oriented**: Honestly reflects Rakesh's status as a 3rd-year B.Tech CSE & AIML student without fabricated jobs, awards, or fake stats.
- **Accessibility & Performance**: Zero layout shifts, no distracting custom cursors, full keyboard navigation, and automatic pause for users with `prefers-reduced-motion`.

