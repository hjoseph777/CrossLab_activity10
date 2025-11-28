## CrossLab Activity 10 - Registration Flow Demo (Expo) Project

## Project Details
- Course: Cross Platform Mobile Development
- Author: Harry Joseph
- Created: 2025-11-27
- Platform: Expo (React Native + TypeScript + Expo Router)
- Package Manager: npm
- Minimum React Native version (from scaffold): 0.81.x
- Routing: File-based via `expo-router`

## Overview
CrossLab Activity 10 demonstrates a complete registration flow in React Native with modern UI design. The project showcases form validation, platform-specific confirmation dialogs, animated success feedback, and cross-platform deployment to Vercel.

## Quick Download

**Get the complete project instantly:**

[![Download CrossLab Activity 10](https://img.shields.io/badge/Download-CrossLab_Activity10.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/CrossLab_activity10/releases/download/v1/CrossLab_activity10.zip)

## Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://cross-lab-activity10.vercel.app)

*Complete Expo project with registration flow ready to run*

## Important: Where your Registration code lives
- The main registration form is in [`components/registration/RegistrationForm.tsx`](components/registration/RegistrationForm.tsx) with state management and validation
- The confirmation modal is in [`components/registration/ConfirmationModal.tsx`](components/registration/ConfirmationModal.tsx) with platform-specific dialogs
- The success feedback is in [`components/registration/SuccessModal.tsx`](components/registration/SuccessModal.tsx) with animations

## Project Explorer
An interactive, collapsible view of the codebase. Click file names to open them.

<details open>
   <summary><strong>app/ - Routes & Navigation</strong></summary>

   - 📁 <strong>app</strong>
      - 📄 [`_layout.tsx`](app/_layout.tsx) - Root stack layout with theme provider
      - 📄 [`modal.tsx`](app/modal.tsx) - Example modal screen
      - 📁 <strong>(tabs)</strong>
         - 📄 [`_layout.tsx`](app/(tabs)/_layout.tsx) - Bottom tab navigator config
         - 🏠 [`index.tsx`](app/(tabs)/index.tsx) - **Welcome home screen**
         - 🔍 [`explore.tsx`](app/(tabs)/explore.tsx) - Feature showcase screen
         - 📝 [`register.tsx`](app/(tabs)/register.tsx) - **Main registration screen**
</details>

<details>
   <summary><strong>components/ - Reusable UI & Registration</strong></summary>

   - 📁 <strong>components</strong>
      - 📁 <strong>registration</strong>
         - 📝 [`RegistrationForm.tsx`](components/registration/RegistrationForm.tsx) - **Main registration form component**
         - ✅ [`ConfirmationModal.tsx`](components/registration/ConfirmationModal.tsx) - **Confirmation dialog component**
         - 🎉 [`SuccessModal.tsx`](components/registration/SuccessModal.tsx) - **Success feedback component**
      - 🖼️ [`parallax-scroll-view.tsx`](components/parallax-scroll-view.tsx) - Parallax header wrapper
      - ✨ [`themed-text.tsx`](components/themed-text.tsx) - Theme aware text
      - 🎨 [`themed-view.tsx`](components/themed-view.tsx) - Theme aware container
      - 🔔 [`haptic-tab.tsx`](components/haptic-tab.tsx) - Haptic feedback for tabs
      - 🔗 [`external-link.tsx`](components/external-link.tsx) - External URL opener
      - 👋 [`hello-wave.tsx`](components/hello-wave.tsx) - Animated wave component
      - 📁 ui
         - 📂 [`collapsible.tsx`](components/ui/collapsible.tsx) - Expand/collapse content region
         - 🧩 [`icon-symbol.tsx`](components/ui/icon-symbol.tsx) - Generic platform icon
         - 🧩 [`icon-symbol.ios.tsx`](components/ui/icon-symbol.ios.tsx) - iOS variant icon
</details>

<details>
   <summary><strong>constants/ & hooks/ - Theming & Utilities</strong></summary>

   - 🎛️ [`constants/theme.ts`](constants/theme.ts) - Theme tokens & palette
   - 🧵 Hooks:
      - [`hooks/use-color-scheme.ts`](hooks/use-color-scheme.ts) - Native color scheme
      - [`hooks/use-color-scheme.web.ts`](hooks/use-color-scheme.web.ts) - Web override
      - [`hooks/use-theme-color.ts`](hooks/use-theme-color.ts) - Resolve themed colors
</details>

<details>
   <summary><strong>Testing & Assets</strong></summary>

   - 🧪 [`__tests__/RegistrationForm.test.js`](__tests__/RegistrationForm.test.js) - Unit tests for registration form
   - 🖼️ `assets/images/` - Icons, splash, logos
   - 🛠️ [`scripts/reset-project.js`](scripts/reset-project.js) - Reset scaffold helper
</details>

<details>
   <summary><strong>Config & Deployment</strong></summary>

   - ⚙️ [`app.json`](app.json) - Expo configuration (name, icons, splash)
   - 🚀 [`vercel.json`](vercel.json) - Vercel deployment configuration
   - 📦 [`package.json`](package.json) - Dependencies & scripts
   - 🧪 [`tsconfig.json`](tsconfig.json) - TypeScript compiler options
   - 🔍 [`eslint.config.js`](eslint.config.js) - Lint rules
   - 📝 [`README.md`](README.md) - Documentation (this file)
</details>
