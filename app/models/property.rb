class Property < ApplicationRecord
  belongs_to :account
  has_many_attached :photos
end
