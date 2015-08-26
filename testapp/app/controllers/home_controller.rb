class HomeController < ApplicationController
  def index
    @data = {:name => 'Pete'}
    @content = get_html(@data)
  end

  private
  def get_html(data)
    RestClient.get 'http://localhost:3000/', :params => {:module => '../jsapp/src/App'.to_json, :props => data.to_json}
  end
end
