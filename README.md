# Firstapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Alternatively Run `ng serve -o` to directly launch the app.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Command to generate a component
Command to generate a component having inline template,style and no test file
$ ng g c <component-name> --skip-tests -s -t

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## To deploy on github pages

To deploy this app on github pages follow instructions as mentioned below.
1) C:\Users\<USER>\git\firstapp>ng add angular-cli-ghpages.This is one time activity.
2) C:\Users\<USER>\git\firstapp>ng deploy --base-href=/firstapp/
3) Navigate to https://yogesh-nandwana.github.io/firstapp/ in browser