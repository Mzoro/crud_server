class CreateProds < ActiveRecord::Migration[5.0]
  def change
    create_table :prods do |t|
      t.string :name
      t.string :des

      t.timestamps
    end
  end
end
