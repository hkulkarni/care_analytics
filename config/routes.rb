Rails.application.routes.draw do
  root 'home#index'
  put 'create', to: 'home#signup', as: 'signup'
end
