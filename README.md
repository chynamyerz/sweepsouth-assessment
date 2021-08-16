# SweepSouth assessment

This project serves as part of the [SweepSouth](https://sweepsouth.com/) interview process.

## Setting up for development

### Cloning the code

To clone, you need to run the following command (assuming that `git` is installed on your machine.

```bash
git clone https://github.com/chynamyerz/sweepsouth-assessment.git
```

A directory of name `sweepsouth-assessment` with the code will be created.

You will need to install the required Node packages and run the development server. Node and yarn must be installed on your machine.

```bash
cd sweepsouth-assessment
yarn
yarn dev
```

### Workflow policy

No code changes should be pushed to either the development or the master branch.
Instead, create a new local branch from the development branch, make your changes and push the branch to the Github repository.

Afterwards, make a pull request in Github from the new branch to the development branch.

In principle, someone else should check the pull request, and approve or reject for further changes.

Once work on a branch other than master or development is done, that branch should be merged to development and be deleted.

### Structure of Code related comments.

For every new component or helper or lib, etc. to be created, a certain folders and files structure must be followed.
All of these folders and files should be hosted in the `src` directory.

##### Components should go into "components" folder.

Say we have 2 major components with some sub-components in each:
Component: Profile
Sub-Components: ProfileImage, ProfileSummary.
Folder Structure:

```
|_ components
  |_ Profile
  |_ **tests**
    |_ Profile.tsx
  |_ Profile.tsx
  |_ types.ts
  |_ constants.ts
  |_ styles.ts
  |_ useProfile.ts
  |_ components
    |_ ProfileImage
      |_ **tests**
        |_ ProfileImage.tsx
      |_ ProfileImage.tsx
      |_ types.ts
      |_ constants.ts
      |_ styles.ts
    |_ ProfileSummary
      |_ **tests**
        |_ ProfileSummary.tsx
      |_ ProfileSummary.tsx
      |_ types.ts
      |_ constants.ts
```

NOTE: if component is complicated and has sub-components, create "components" folder in this component and keep sub-components in there.

- All types and interfaces should be in "types.ts" file.

- All constants should be in "constants.ts" file.

- Styling related stuff should be in "styles.ts" files.

- Tests should be kept next to its component, in "**tests**" folder and should be named as "Component.tsx".

- Functional components + React Hooks should be used.

- Components should be as lean as possible.

- Comments in code where appropriate, not too much, code should be self documenting as much as possible.

- Should use `index.ts` exporters to keep import statements everywhere neat and without redundancies.

- [Referrence to the suggested folders and files dtructure](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)

#### Utils folder

This folder contains files that are shared globally in the project.

Things like helper funtions should be located in the file created inside this folder, e.g. `helper.ts`

#### Lib folder

This folder contains files that resembles some sort of libraries that used globally in the project.

Things like context api should be defined in this folder. `profileContext`

### Running and testing the application

To run the application execute the command `yarn dev` in the project's root directory.
