class HomeController < ApplicationController

  before_filter :authorize

  def index
  end

  def signup
    puts "params: " + params.inspect
  end
end