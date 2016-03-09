class MembersController < ApplicationController
  before_action :set_auth

  def login
  end

  def profile
  end

  private

  def set_auth
    @auth = session[:omniauth] if session[:omniauth]
  end
end
