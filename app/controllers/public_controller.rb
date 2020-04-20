class PublicController < ApplicationController
  def main

    if account_signed_in?
      path = current_account.admin? ? accounts_path : dashboard_path

    end

    @properties = Property.all
  end
end
