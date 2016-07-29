class Prod < ApplicationRecord
  validates :name, presence: true, allow_blank: false
  validates :des, presence: true, allow_blank: false
end
