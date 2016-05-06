require 'test_helper'

class CustomerControllerTest < ActionController::TestCase
  test "should get provider" do
    get :provider
    assert_response :success
  end

end
