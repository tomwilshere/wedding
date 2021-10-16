require "test_helper"

class SiteControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get site_home_url
    assert_response :success
  end

  test "should get rsvp" do
    get site_rsvp_url
    assert_response :success
  end

  test "should get gifts" do
    get site_gifts_url
    assert_response :success
  end

  test "should get accommodation" do
    get site_accommodation_url
    assert_response :success
  end
end
