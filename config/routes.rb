Rails.application.routes.draw do
  root to: 'site#home'
  get 'rsvp', to: 'site#rsvp'
  get 'gifts', to: 'site#gifts'
  get 'accommodation', to: 'site#accommodation'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
