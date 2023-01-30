# Command Line Journal

## CLI

```bash
ng new app-name --minimal --routing --style=scss
ng build
ng serve -o --port 4223
```

## Components

```bash
ng g c activities
ng g m layout
ng g c layout/header
ng g c layout/footer
ng g m ui
ng g c ui/card-title --export
ng g c ui/age-category --export
ng g c ui/location --export
ng g c ui/date --export
ng g c ui/price --export
```

## Routes

```bash
# eager
# ng g c routes/about
# lazy
ng g m routes/contact --routing
ng g c routes/contact/contact
ng g m routes/auth/register --route=auth/register -m=app
ng g m routes/activities --route=activities -m=app
ng g m routes/activities/create-activity --route=create -m=activities
ng g m routes/activities/activity --route=:slug -m=activities
# refactor (create about and home lazy modules)
ng g m routes/about --route=about -m=app
ng g m routes/home --route=home -m=app
```

## Forms

```bash
# generate a presentation component
ng g c routes/activities/create-activity/create-activity-form --flat
```

## Services

```bash
# To Do:
# Core services (form feedback, slugs and ids, etc.)
# Feature services (activities, auth, etc.)
```
