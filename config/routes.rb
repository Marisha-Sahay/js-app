Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/parking', to: 'pages#parking'
end
