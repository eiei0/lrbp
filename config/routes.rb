Rails.application.routes.draw do
  get 'members/profile'

  delete 'members/sign_out', to: "sessions#destroy", as: 'sign_out'

  get 'auth/:provider/callback', to: "sessions#create"

  root to: 'welcome#index'

  # Default Scrivito routes. Adapt them to change the routing of CMS objects.
  # See the documentation of 'scrivito_route' for a detailed description.
  scrivito_route '/', using: 'homepage'
  scrivito_route '(/)(*slug-):id', using: 'slug_id'
  scrivito_route '/*permalink', using: 'permalink', format: false
end
