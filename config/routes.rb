Rails.application.routes.draw do
  get '/dashboard' => 'dashboard#index', as: :'dashboard'
  get '/profile/:id' => 'dashboard#profile', as: :'profile'
  post '/agent/message' => 'properties#email_agent', as: :email_agent


  get 'dashboard/properties'
  get 'dashboard/reports'

  resources :properties
  devise_for :accounts
  root to: 'public#main'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
