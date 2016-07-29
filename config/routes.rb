Rails.application.routes.draw do
  resources :prods

  match 'crud', to: 'crud#index', via: [:get, :post]
  match 'crud/*path', to: 'crud#index', via: [:get, :post]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
