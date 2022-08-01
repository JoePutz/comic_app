class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comic_id, :star, :comment
  belongs_to :user
  belongs_to :comic
end