class HomeController < ApplicationController
  def index
  end

  def signup
    puts "params: " + params.inspect
  end
end