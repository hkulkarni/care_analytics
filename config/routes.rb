Rails.application.routes.draw do
  root 'home#index'
  put 'create', to: 'home#signup', as: 'signup'
  get 'portal', to: 'home#portal', as: 'portal'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  
  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  post '/forms' => 'forms#create'
  post '/signature' => 'forms#save_signature'
  get '/form' => 'forms#template'
  get '/list' => 'forms#list'
end
