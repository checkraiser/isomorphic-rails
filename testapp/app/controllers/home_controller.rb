class HomeController < ApplicationController
  def index
    @data = {:name => 'Pete'}
    @content = get_html("HomeIndex", @data)
    render :template => 'home/index'
  end

  def about
    @data = {}
    @content = get_html("HomeAbout", @data)
    render :template => 'home/index'
  end
  private
  def get_html(component, data)
    RestClient.get 'http://localhost:3000/', :params => {:module => component.to_json, :props => data.to_json}
  end
end
