class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session,
      if: Proc.new { |c| c.request.format =~ %r{application/json} }

  def current_user
    begin
      if session[:user_id]
        @current_user ||= User.find(session[:user_id])
      elsif params['id']
        @current_user ||= User.find(params['id'])
      end
    rescue ActiveRecord::RecordNotFound => e
      Rails.logger.info("Attempted to retrieve non-existent user with id: #{params['id'].inspect} session: #{session[:user_id].inspect}")
      @current_user = nil
    end
  end
  helper_method :current_user

  def authorize
  end
end
