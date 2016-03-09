Rails.application.routes.draw do
  get 'members/profile'

  get 'members/sign_out', to: "sessions#destroy", as: 'sign_out'

  get 'auth/:provider/callback', to: "sessions#create"

  root to: 'welcome#index'
end
