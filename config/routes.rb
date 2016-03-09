Rails.application.routes.draw do
  get 'members/profile'

  get 'auth/:provider/callback', to: "sessions#create"

  get'sign_out', to: "sessions#destroy", as: 'sign_out'

  root to: 'welcome#index'
end
